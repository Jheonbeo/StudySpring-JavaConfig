package org.zerock.controller;

import java.util.Locale;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestMethod;
/**
 * Handles requests for the application home page.
 */
@Controller
public class HomeController {
	private Logger log = LogManager.getLogger(this.getClass());
	
	//home을 리턴했으니 경로는 '/WEB-INF/views/home.jsp'가 된다. '/WEB-INF/views/*.jsp'라 Servlet에 지정했으니
	@RequestMapping(value = "/", method = RequestMethod.GET)
	public String home(Locale locale, Model model) {
		log.info("Welcome joyson system! The client locale is {}.", locale);

		return "loginout/jssLogin";
	}
}
