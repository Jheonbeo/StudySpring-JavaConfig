package org.zerock.config;

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
}
