package org.zerock.service;

import static org.junit.Assert.assertNotNull;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.zerock.domain.ItemVO;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
@ContextConfiguration(classes={org.zerock.config.RootConfig.class})
@Log4j
public class ItemServiceTests {
	@Setter(onMethod_ = {@Autowired})
	private ItemService service;
	
	/*
	@Test
	public void testExist() {
		log.info(service);
		assertNotNull(service);
	}
	
	@Test
	public void testRegister() {
		ItemVO item = new ItemVO();
		
		item.setCD_ITEM("88810TEST");
		item.setNM_ITEM("TEST");
		item.setSEG_ASSET("60");
		item.setBOX_SNP(100);
		
		service.register(item);
		
		log.info("생성된 품번 : " + item.getCD_ITEM());
	}
	
	@Test
	public void testGetList() {
		service.getList().forEach(item -> log.info(item));
	}
	
	@Test
	public void testGet() {
		log.info(service.get("88810TEST"));
	}
	
	@Test
	public void testDelete() {
		log.info("REMOVE RESULT: " + service.remove("88810TEST"));
	}
	
	@Test
	public void testUpdate() {
		ItemVO item = service.get("88810TEST");
		
		if(item == null)
			return;
		
		item.setBOX_SNP(5);
		log.info("MODIFY RESULT: " + service.modify(item));
	}
	*/
}
