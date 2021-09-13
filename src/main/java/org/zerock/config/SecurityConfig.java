package org.zerock.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.web.authentication.AuthenticationFailureHandler;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.springframework.security.web.authentication.www.BasicAuthenticationFilter;
import org.zerock.security.CustomAuthenticationFilter;
import org.zerock.security.CustomAuthenticationProvider;
import org.zerock.security.CustomLoginFailure;
import org.zerock.security.CustomLoginSuccessHandler;

@Configuration 
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
		auth.authenticationProvider(customAuthenticationProvider());
   }

   @Override
   protected void configure(HttpSecurity http) throws Exception {
	   http
	   	.csrf().disable()
	   	.authorizeRequests()
	    .antMatchers(
		    "/favicon.ico",
		    "/").permitAll()
		   	.and()
		.formLogin()
			.loginPage("/loginout/jssLogin")
			.loginProcessingUrl("/loginout/loginProcess")
	        .successHandler(successHandler())
	        .failureHandler(failureHandler())
            .permitAll()
		   	.and()
            .addFilterBefore(customAuthenticationFilter(), BasicAuthenticationFilter.class)
	   	.logout()
	   		.logoutUrl("/loginout/jssLogOut")
	   		.invalidateHttpSession(true)
	   		.deleteCookies("JSESSIONID")
	   		.and()
	   	.exceptionHandling()
	   		.accessDeniedPage("/loginout/accessError");
   }

	@Bean
	public AuthenticationSuccessHandler successHandler() {
	    return new CustomLoginSuccessHandler();
	}

    @Bean
    public CustomAuthenticationProvider customAuthenticationProvider() {
        return new CustomAuthenticationProvider();
    }
    
    @Bean
    public AuthenticationFailureHandler failureHandler() {
    	return new CustomLoginFailure();
    }

    @Bean
    public CustomAuthenticationFilter customAuthenticationFilter() throws Exception {
        CustomAuthenticationFilter customAuthenticationFilter = new CustomAuthenticationFilter(authenticationManager());
        customAuthenticationFilter.setFilterProcessesUrl("/loginout/login");
        customAuthenticationFilter.setAuthenticationSuccessHandler(successHandler());
        customAuthenticationFilter.afterPropertiesSet();
        return customAuthenticationFilter;
    }
}
