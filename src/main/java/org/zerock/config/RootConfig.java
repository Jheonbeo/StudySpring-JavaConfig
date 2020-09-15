package org.zerock.config;

import javax.sql.DataSource;

import org.apache.ibatis.session.SqlSessionFactory;
import org.mybatis.spring.SqlSessionFactoryBean;
import org.mybatis.spring.annotation.MapperScan;
import org.springframework.context.annotation.Bean;
import org.springframework.context.annotation.ComponentScan;
import org.springframework.context.annotation.Configuration;
import org.springframework.transaction.annotation.EnableTransactionManagement;

import com.zaxxer.hikari.HikariConfig;
import com.zaxxer.hikari.HikariDataSource;

/* 공통빈을 설정하는 곳으로 주로 View 지원을 제외한 bean을 설정 */
@Configuration
@EnableTransactionManagement
@ComponentScan(basePackages= {"org.zerock.sample"})
@ComponentScan(basePackages= {"org.zerock.service"})
@MapperScan(basePackages= {"org.zerock.mapper"})
public class RootConfig {
	@Bean
	public DataSource dataSource() {
		HikariConfig hikariConfig = new HikariConfig();
		//driverClassName : oracle.jdbc.driver.OracleDriver 대신에 oracle.jdbc.OracleDriver를 사용
		//hikariConfig.setDriverClassName("oracle.jdbc.OracleDriver");
		//hikariConfig.setJdbcUrl("jdbc:oracle:thin:@10.211.110.123:1521:TKKPM");
		hikariConfig.setDriverClassName("net.sf.log4jdbc.sql.jdbcapi.DriverSpy");
		hikariConfig.setJdbcUrl("jdbc:log4jdbc:oracle:thin:@10.211.110.123:1521:TKKPM");
		hikariConfig.setUsername("TKK_UAT");
		hikariConfig.setPassword("TKK_UAT");
		
		HikariDataSource dataSource = new HikariDataSource(hikariConfig);
		
		return dataSource;
	}

	/*
	 * @Bean public PlatformTransactionManager transactionManager() throws
	 * URISyntaxException, GeneralSecurityException, ParseException, IOException {
	 * return new DataSourceTransactionManager(dataSource()); }
	 */
	
	/*
	 * @SuppressWarnings("static-access")
	 * 
	 * @Bean public LocalSessionFactoryBean sessionFactory() { Properties properties
	 * = new Properties(); properties.put(env.DIALECT,
	 * "org.hibernate.dialect.Oracle10gDialect"); properties.put(env.SHOW_SQL,
	 * "true"); //SQL 보기 properties.put(env.FORMAT_SQL, "true"); //SQL 정렬해서 보기
	 * properties.put(env.USE_SQL_COMMENTS, "true"); //SQL 주석 보기
	 * properties.put(env.USE_NEW_ID_GENERATOR_MAPPINGS, "true"); //JPA 표준에 맞게 새로운 키
	 * 생성 전략을 사용
	 * 
	 * LocalSessionFactoryBean localSessionFactoryBean = new
	 * LocalSessionFactoryBean();
	 * localSessionFactoryBean.setDataSource(dataSource());
	 * localSessionFactoryBean.setHibernateProperties(properties);
	 * localSessionFactoryBean.setPackagesToScan(new String[] { "org.zerock.domain"
	 * }); return localSessionFactoryBean; }
	 */
    
	@Bean
	public SqlSessionFactory sqlSessionFactory() throws Exception {
		SqlSessionFactoryBean sqlSessionFactory = new SqlSessionFactoryBean();
		sqlSessionFactory.setDataSource(dataSource());
		return (SqlSessionFactory) sqlSessionFactory.getObject();
	}
}
