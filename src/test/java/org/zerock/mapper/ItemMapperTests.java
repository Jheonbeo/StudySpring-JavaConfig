package org.zerock.mapper;

import org.junit.Test;
import org.junit.runner.RunWith;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.test.context.ContextConfiguration;
import org.springframework.test.context.junit4.SpringJUnit4ClassRunner;
import org.zerock.domain.ItemVO;

import lombok.Setter;
import lombok.extern.log4j.Log4j;

@RunWith(SpringJUnit4ClassRunner.class)
//@ContextConfiguration("file:src/main/webapp/WEB-INF/spring/root-context.xml")
@ContextConfiguration(classes = {org.zerock.config.RootConfig.class})
@Log4j
public class ItemMapperTests {
	@Setter(onMethod_ = @Autowired)
	private ItemMapper mapper;
	
	@Test
	public void testGetList() {
		mapper.getList().forEach(board -> log.info(board));
	}
	/*
	@Test
	public void testInsert() {
		ItemVO item = new ItemVO();
		item.setCD_ITEM("88810TEST");
		item.setNM_ITEM("test item");
		item.setBOX_SNP(10);
		item.setITEM_UPH(120);
		item.setSEG_ASSET("60");
		
		mapper.insert(item);
		
		
		log.info("insert");
		log.info(item);
	}
*/
	@Test
	public void testInsertSelectKey() {
		ItemVO item = new ItemVO();
		item.setCD_ITEM("88810TEST");
		item.setNM_ITEM("test item");
		item.setBOX_SNP(10);
		item.setITEM_UPH(120);
		item.setSEG_ASSET("60");
		
		mapper.insertSelectKey(item);

		log.info("insertSelectKey");
		log.info(item);
	}
}
