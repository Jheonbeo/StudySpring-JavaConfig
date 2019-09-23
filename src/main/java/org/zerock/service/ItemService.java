package org.zerock.service;

import java.util.HashMap;
import java.util.List;

import org.zerock.domain.ItemVO;

public interface ItemService {
	public void register(ItemVO item);
	
	public ItemVO get(String cd_item);
	
	public boolean modify(ItemVO item);
	
	public boolean remove(String cd_Item);
	
	public List<ItemVO> getList();
	
	public String getSupplierList(HashMap<String, Object> map);
}
