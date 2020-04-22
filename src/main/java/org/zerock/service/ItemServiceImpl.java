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
	public List<ItemVO> getList() {
		// TODO Auto-generated method stub
		log.info("Service : getTotalItemList");

		List<ItemVO> arrResult = new ArrayList<ItemVO>();
		try {
			for(ItemVO result : mapper.getList()) {
				result.setNM_ITEM(URLDecoder.decode(result.getNM_ITEM(), "UTF-8").toString());
				arrResult.add(result);
			}
			
			return arrResult;
		} catch (UnsupportedEncodingException e) {
			// TODO Auto-generated catch block
			e.printStackTrace();
			return null;
		}
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
				
				if(data.getNM_SUPPLIER() != null) {
					data.setNM_SUPPLIER(URLDecoder.decode(data.getNM_SUPPLIER(), "UTF-8").toString());
				}
				if(data.getNM_CUSTOMER() != null) {
					data.setNM_CUSTOMER(URLDecoder.decode(data.getNM_CUSTOMER(), "UTF-8").toString());
				}
				if(data.getNM_ITEM() != null) {
					data.setNM_ITEM(URLDecoder.decode(data.getNM_ITEM(), "UTF-8").toString());
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
