package org.zerock.mapper;

import java.util.List;

import org.apache.ibatis.annotations.Select;
import org.zerock.domain.ItemVO;

public interface ItemMapper {
	//@Select("select * from tkk_item where crt_dat >= sysdate - 1")
	public List<ItemVO> getList();
	
	public void insert(ItemVO item);
	
	public void insertSelectKey(ItemVO item);
}
