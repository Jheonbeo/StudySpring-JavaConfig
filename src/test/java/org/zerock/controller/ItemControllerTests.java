package org.zerock.controller;

import org.junit.Before;
import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.springframework.test.context.web.WebAppConfiguration;
import org.springframework.test.web.servlet.MockMvc;
import org.springframework.test.web.servlet.request.MockMvcRequestBuilders;
import org.springframework.test.web.servlet.setup.MockMvcBuilders;
import org.springframework.web.context.WebApplicationContext;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@WebAppConfiguration
@ContextConfiguration(classes = {org.zerock.config.RootConfig.class, org.zerock.config.ServletConfig.class})
@Log4j
public class ItemControllerTests {
	@Setter(onMethod_= {@Autowired})
	private WebApplicationContext ctx;
	
	private MockMvc mockMvc;	//가짜 mvc. 브라우저에서 사용하는 것처럼 만듬(GET 방식).
	
	@Before	//모든 Test전 실행되는 메소드가 됨.
	public void setup() {
		this.mockMvc = MockMvcBuilders.webAppContextSetup(ctx).build();
	}
	/*
	@Test
	public void testList() throws Exception{
		log.info(
				mockMvc.perform(MockMvcRequestBuilders.get("/item/list"))
				.andReturn()
				.getModelAndView()
				.getModelMap());
	}
	@Test
	public void testRegister() throws Exception{
		String resultPage = mockMvc.perform(MockMvcRequestBuilders.post("/item/register")
				.param("CD_ITEM", "testItem")
				.param("NM_ITEM", "testName")
				.param("BOX_SNP", "8")
				.param("ITEM_UPH", "100")
				.param("SEG_ASSET", "60")).andReturn().getModelAndView().getViewName();
		
		log.info(resultPage);
	}
	@Test
	public void tetGet() throws Exception{
		log.info(mockMvc.perform(MockMvcRequestBuilders
				.get("/item/get")
				.param("CD_ITEM", "testItem"))
				.andReturn().getModelAndView().getModelMap());
	}
	@Test
	public void testModify() throws Exception{
		String resultPage = mockMvc.perform(MockMvcRequestBuilders.post("/item/modify")
				.param("CD_ITEM", "testItem")
				.param("NM_ITEM", "testName")
				.param("BOX_SNP", "10")
				.param("ITEM_UPH", "100")
				.param("SEG_ASSET", "60")).andReturn().getModelAndView().getViewName();
		log.info(resultPage);
	}
	*/
	@Test
	public void testRemove() throws Exception{
		String resultPage = mockMvc.perform(MockMvcRequestBuilders.post("/item/remove")
				.param("CD_ITEM", "testItem")).andReturn().getModelAndView().getViewName();
		log.info(resultPage);
	}
	
}
