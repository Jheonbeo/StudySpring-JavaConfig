package org.zerock.config;

import javax.servlet.Filter;
import javax.servlet.ServletRegistration;

import org.springframework.web.filter.CharacterEncodingFilter;
import org.springframework.web.servlet.support.AbstractAnnotationConfigDispatcherServletInitializer;

/* 이 파일은 WAS(Web Application Server)가 최초 구동될 때 즉 톰켓이 최초 구동될 때 
 * web.xml을 읽고 그에 해당하는 설정을 구성한다. 
 * 즉 각종 설정을 위한 설정파일이라고 할 수 있다. */
public class WebConfig extends AbstractAnnotationConfigDispatcherServletInitializer{
		@Override
		protected Class<?>[] getRootConfigClasses(){
			return new Class[] {RootConfig.class};
		}

		@Override
		protected Class<?>[] getServletConfigClasses() {
			// TODO Auto-generated method stub
			return new Class[] {ServletConfig.class};
		}

		@Override
		protected String[] getServletMappings() {
			// TODO Auto-generated method stub
			return new String[] {"/"};
		}
		
		@Override
		protected void customizeRegistration(ServletRegistration.Dynamic registration) {
			registration.setInitParameter("throwExceptionIfNoHandlerFound", "true");
		}
		
		@Override
		protected Filter[] getServletFilters() {
			CharacterEncodingFilter characterEncodingFilter = new CharacterEncodingFilter();
			characterEncodingFilter.setEncoding("UTF-8");
			characterEncodingFilter.setForceEncoding(true);
			
			return new Filter[] {characterEncodingFilter};
		}
}
