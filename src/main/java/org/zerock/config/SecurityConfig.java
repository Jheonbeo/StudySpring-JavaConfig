package org.zerock.config;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.Configuration;
import org.springframework.security.config.annotation.authentication.builders.AuthenticationManagerBuilder;
import org.springframework.security.config.annotation.web.builders.HttpSecurity;
import org.springframework.security.config.annotation.web.configuration.EnableWebSecurity;
import org.springframework.security.config.annotation.web.configuration.WebSecurityConfigurerAdapter;
import org.springframework.security.core.userdetails.UserDetailsService;
import org.springframework.security.crypto.bcrypt.BCryptPasswordEncoder;
import org.springframework.security.crypto.password.PasswordEncoder;
import org.springframework.security.web.authentication.AuthenticationSuccessHandler;
import org.zerock.common.CustomLoginSuccessHandler;
import org.zerock.common.CustomUserDetailsService;

@Configuration 
@EnableWebSecurity
public class SecurityConfig extends WebSecurityConfigurerAdapter {
	@Autowired
    public void configureGlobal(AuthenticationManagerBuilder auth) throws Exception {
      auth.userDetailsService(customUserService());
      /*.inMemoryAuthentication().user
        .withUser("user").password(passwordEncoder().encode("user1")).roles("USER")
        .and()
        .withUser("admin").password(passwordEncoder().encode("admin1")).roles("ADMIN");*/
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
			.loginPage("/loginout/login")
			.loginProcessingUrl("/loginout/loginProcess")
	        .successHandler(successHandler())
		   	.and()
	   	.logout()
	   		.logoutUrl("/loginout/jssLogOut")
	   		.logoutSuccessUrl("/")
	   		.invalidateHttpSession(true)
	   		.and()
	   	.exceptionHandling()
	   		.accessDeniedPage("/loginout/accessError");
   }

	@Bean
	public AuthenticationSuccessHandler successHandler() {
	    return new CustomLoginSuccessHandler();
	}

    @Bean
    public PasswordEncoder passwordEncoder() {
        return new BCryptPasswordEncoder();
    }
    
    @Bean
    public UserDetailsService customUserService() {
    	return new CustomUserDetailsService();
    }
}
