package com.bank.Banking.security;

import java.io.IOException;

import org.slf4j.Logger;


import org.slf4j.LoggerFactory;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.security.authentication.UsernamePasswordAuthenticationToken;
import org.springframework.security.core.context.SecurityContextHolder;
import org.springframework.security.core.userdetails.UserDetails;
import org.springframework.security.web.authentication.WebAuthenticationDetailsSource;
import org.springframework.stereotype.Component;
import org.springframework.util.StringUtils;
import org.springframework.web.filter.OncePerRequestFilter;

import com.bank.Banking.service.CustomUserDetailsService;

import jakarta.servlet.FilterChain;
import jakarta.servlet.ServletException;
import jakarta.servlet.http.HttpServletRequest;
import jakarta.servlet.http.HttpServletResponse;

@Component
public class JwtAuthenticationFilter extends OncePerRequestFilter{
	@Autowired
	  private JwtUtils jwtUtils;

	  @Autowired
	  private CustomUserDetailsService userDetailsService;

	  private static final Logger logger = LoggerFactory.getLogger(JwtAuthenticationFilter.class);

	  @Override
	  protected void doFilterInternal(HttpServletRequest request, HttpServletResponse response, FilterChain filterChain)
	      throws ServletException, IOException {
	    try {
	      String jwt = parseJwt(request);
	      if (jwt != null && jwtUtils.validateJwtToken(jwt)) {
	        String username = jwtUtils.getUserNameFromJwtToken(jwt);

	        UserDetails userDetails = userDetailsService.loadUserByUsername(username);
	        System.out.println(userDetails);
	        UsernamePasswordAuthenticationToken authentication =
	            new UsernamePasswordAuthenticationToken(
	                userDetails,
	                null,
	                userDetails.getAuthorities());
	        authentication.setDetails(new WebAuthenticationDetailsSource().buildDetails(request));

	        SecurityContextHolder.getContext().setAuthentication(authentication);
	      }
	    } catch (Exception e) {
	      logger.error("Cannot set user authentication: {}", e);
	    }

	    filterChain.doFilter(request, response);
	  }

	  private String parseJwt(HttpServletRequest request) {
	    String headerAuth = request.getHeader("Authorization");
	    if (StringUtils.hasText(headerAuth) && headerAuth.startsWith("Bearer ")) {
	      return headerAuth.substring(7);
	    }

	    return null;
	  }
}
