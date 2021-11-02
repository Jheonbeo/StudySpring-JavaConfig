package org.zerock.service;

import java.util.ArrayList;
import java.util.List;

import org.zerock.domain.ItemVO;

public interface ItemService {
	
	public List<ItemVO> getList();
	
	public ArrayList<ItemVO> getItemDataList(String array_data, String action);
}
