package org.zerock.config;

import java.io.IOException;

import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.core.io.FileSystemResource;
import org.springframework.web.multipart.commons.CommonsMultipartResolver;
import org.springframework.web.servlet.config.annotation.EnableWebMvc;
import org.springframework.web.servlet.config.annotation.ResourceHandlerRegistry;
import org.springframework.web.servlet.config.annotation.ViewResolverRegistry;
import org.springframework.web.servlet.config.annotation.WebMvcConfigurer;
import org.springframework.web.servlet.view.InternalResourceViewResolver;
import org.springframework.web.servlet.view.JstlView;

/* View 지원 bean을 설정 */
@EnableWebMvc
@ComponentScan(basePackages= {"org.zerock.controller", "org.zerock.exception"})
public class ServletConfig implements WebMvcConfigurer{
	@Override
	public void configureViewResolvers(ViewResolverRegistry registry) {
		//ViewResolver : Controller가 View에 전달할 데이터를 Model 객체에 담아 보내는데 이때
		//보내진 Model을 어떤 View에서 처리하는 것이 좋을지 해석하는 역활을 ViewResolver가 담당.
		//InternalResourceViewResolver : 웹 어플리케이션의 WAR 파일 내에 포함된 퓨 템플릿을 찾는다.(가장 흔하게 사용)
		//뷰 템플릿의 경로는 논리적 뷰 이름에 접두어와 접미어를 붙여 구성.
		InternalResourceViewResolver bean = new InternalResourceViewResolver();
		bean.setViewClass(JstlView.class);
		bean.setPrefix("/WEB-INF/views/");	//접두어
		bean.setSuffix(".jsp");				//접미어
		registry.viewResolver(bean);
	}
	
	@Override
	public void addResourceHandlers(ResourceHandlerRegistry registry) {
		registry.addResourceHandler("/resources/**").addResourceLocations("/resources/");
	}
	
	@Bean(name = "multipartResolver")
	public CommonsMultipartResolver getResolver() throws IOException {
		CommonsMultipartResolver resolver = new CommonsMultipartResolver();
		
		//10MB
		resolver.setMaxUploadSize(1024 * 1024 * 10);
		
		//2MB
		resolver.setMaxUploadSizePerFile(1024 * 1024 * 2);
		
		//1MB
		resolver.setMaxInMemorySize(1024 * 1024);
		
		//temp upload
		resolver.setUploadTempDir(new FileSystemResource("C:\\TEMP\\upload"));
		
		resolver.setDefaultEncoding("UTF-8");
		
		return resolver;
	}
}
