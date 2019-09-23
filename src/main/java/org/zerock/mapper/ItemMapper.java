package org.zerock.mapper;

import java.util.HashMap;
import java.util.List;

import org.zerock.domain.CompanyVO;
import org.zerock.domain.ItemVO;

public interface ItemMapper {
	//@Select("select * from tkk_item where crt_dat >= sysdate - 1")
	//src/resources/org/zerock/mapper/ItemMapper.xml 참조
	public List<ItemVO> getList();
	
	public void insert(ItemVO item);
	
	public void insertSelectKey(ItemVO item);
	
	public ItemVO read(String CD_ITEM);
	
	public int delete(String CD_ITEM);
	
	public int update(ItemVO item);
	
	public String getSupplierList(HashMap<String, Object> map);
}
