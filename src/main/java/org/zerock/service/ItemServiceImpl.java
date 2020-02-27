package org.zerock.service;

import java.io.UnsupportedEncodingException;
import java.net.URLDecoder;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Service;
import org.zerock.domain.ItemVO;
import org.zerock.mapper.ItemMapper;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Log4j
@Service //비즈니스 영역을 담당하는 객체임을 표시
@AllArgsConstructor
public class ItemServiceImpl implements ItemService{
	//spring 4.3이상에서 단일 파라미터 받는 생성자의 경우 필요한 파라미터를 자동 주입
	//@AllArgsContstructor 이용
	//그게 아니면 Lombok을 활용한
	//@Setter(onMethod_ = @Autowired)
	private ItemMapper mapper;
	
	@Override
	public void register(ItemVO item) {
		log.info("register........." + item);
		
		mapper.insertSelectKey(item);
	}

	@Override
	public ItemVO get(String cd_item) {
		log.info("get.........." + cd_item);
		
		return mapper.read(cd_item);
	}

	@Override
	public boolean modify(ItemVO item) {
		log.info("modify....." + item);
		
		//If sql success, it returns 1. 
		return mapper.update(item) == 1;
	}

	@Override
	public boolean remove(String cd_item) {
		log.info("remove......" + cd_item);

		//If sql success, it returns 1. 
		return mapper.delete(cd_item) == 1;
	}

	@Override
	public List<ItemVO> getList() {
		// TODO Auto-generated method stub
		log.info("Service : getTotalItemList");
		
		return mapper.getList();
	}

	@SuppressWarnings("unchecked")
	public JSONArray getItemDataList(String array_data, int action) {
		// TODO Auto-generated method stub
		log.info("Service : getItemDataList");

		HashMap<String, Object> map = new HashMap<String, Object>();
		map.put("ARRAY_DATA", array_data);
		map.put("ACTION", action);
		mapper.getItemList(map);

		try {
			JSONArray arryObj = new JSONArray();
			for(ItemVO data : (ArrayList<ItemVO>)map.get("resultCursor")) {
				JSONObject jsonObj = new JSONObject();
				
				if(data.getNM_COMPANY() != null) {
					data.setNM_COMPANY(URLDecoder.decode(data.getNM_COMPANY(), "UTF-8").toString());
				}
				if(data.getFREE_AREA() != null) {
					data.setFREE_AREA(URLDecoder.decode(data.getFREE_AREA(), "UTF-8").toString());
				}
				jsonObj.put("ItemVO", data);
				arryObj.add(jsonObj);
			}
			return arryObj;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
	}
}
