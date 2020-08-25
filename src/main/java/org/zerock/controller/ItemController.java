package org.zerock.controller;

import java.io.IOException;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.RequestParam;
import org.springframework.web.bind.annotation.ResponseBody;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.zerock.common.CommonMethod;
import org.zerock.domain.ItemVO;
import org.zerock.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

@Controller	//스프링의 빈으로 인식토록
@Log4j
@RequestMapping("/item/*")	//item으로 시작하는 모든 처리는 이 클래스에서 
@AllArgsConstructor
/*
public static class Order {
    private long cancelPrice;
    private long orderPrice;
 
    @Builder
    private Order(long cancelPrice, long orderPrice) {
        this.cancelPrice = cancelPrice;
        this.orderPrice = orderPrice;
    }
}
아래 builder처럼 생성자를 자동으로 만들어주는 기능. 
다만 AllArgsConstructor의 경우 두 변수 필드의 위치를 바꾸면 
이 경우, IDE가 제공해주는 리팩토링은 전혀 작동하지 않고, 
lombok이 개발자도 인식하지 못하는 사이에 생성자의 파라미터 순서를 필드 선언 순서에 맞춰
orderPrice,cancelPrice로 바꿔버린다. 이러면 코드상 Order order = new Order(5000L, 10000L); 에서
Order order = new Order(10000L, 5000L);로 바꿔줘야하는 번거로움이 발생한다. 타입도 동일해서 에러도 안발생함.
*/
public class ItemController {
	//@Setter(onMethod_= {@Autowired})
	//위 @AllArgsConstructor를 이용한 생성자를 안 만들 경우 Setter 이용 
	private ItemService service;  
	CommonMethod cm = new CommonMethod();

	@GetMapping("/item_list")
	public void list(Model model) {
		log.info("list");
		model.addAttribute("list", service.getList());
	}
	
	@GetMapping("/item_register")
	public void register(Model model) {        
		log.info("register");
		
        model.addAttribute("supplierList", service.getItemDataList(paramToMap("", "30", "", "", ""), 3));
        model.addAttribute("customerList", service.getItemDataList(paramToMap("", "60", "", "", ""), 3));
        model.addAttribute("jssLineList", service.getItemDataList(paramToMap("", "70", "", "", ""), 3));
        model.addAttribute("tomasLineList", service.getItemDataList(paramToMap("", "80", "", "", ""), 3));
        model.addAttribute("tomasWarehouseList", service.getItemDataList(paramToMap("", "85", "", "", ""), 3));
	}

	@GetMapping("/item_modify")
	public void modify(ItemVO itemVO, Model model) {        
		log.info("modify");
		
        model.addAttribute("jssLineList", service.getItemDataList(paramToMap("", "70", "", "", ""), 3));
        model.addAttribute("tomasLineList", service.getItemDataList(paramToMap("", "80", "", "", ""), 3));
        model.addAttribute("tomasWarehouseList", service.getItemDataList(paramToMap("", "85", "", "", ""), 3));
        model.addAttribute("item", itemVO);//service.getItemDataList(data, 4));
	}
	
	@PostMapping("/getSupplier")
	@ResponseBody
	public Object getSupplier(@RequestBody Map<String, Object> param) throws IOException {
		String segValue = (String) param.get("seg_asset");
		
		//service 객체를 controller가 붙잡고 있는거 같다. 새로운 객체로 DAO에 생성해서 하면 null 에러남
		//이유? 모르겠다; 생명주기랑 관련있는거 같은데 알수가 없네...

		Map<String, Object> map = new HashMap<>();
		
		if(segValue.equals("30")) {
			JSONArray arryObj = service.getItemDataList(paramToMap("", segValue, "", "", ""), 3);
			map.put("supplierList", mapping(arryObj));
		}
		else {
			map.put("supplierList", "");
		}
		map.put("segValue", segValue);
		
		return map;
	}
	
	@PostMapping("/getItem")
	@ResponseBody
	public Object getItem(@RequestBody Map<String, Object> param) throws IOException {
		Integer action = (Integer) param.get("action");
		String data = paramToMap((String) param.get("cd_item"), (String) param.get("seg_asset"), (String) param.get("supplier"), (String) param.get("customer"), "NG");
		
		Map<String, Object> map = new HashMap<>();

		JSONArray arryObj = service.getItemDataList(data, action);
		map.put("itemData", mapping(arryObj));
	    
		return map;
	}

	@PostMapping("/setItem")
	@ResponseBody
	public Object setItem(@RequestBody Map<String, Object> param) throws IOException {
		String data = cm.transVOtoString(param);
		JSONArray arryObj = service.getItemDataList(data, 5);
		
		Map<String, Object> map = new HashMap<>();
		map.put("itemData", mapping(arryObj));
		
		return map;
	}
	
	private String paramToMap(String cdItem, String seg_Asset, String supplier, String customer, String discon) {
		Map<String, Object> param = new HashMap<String, Object>();
		
		param.put("CD_ITEM", cdItem);
		param.put("CD_TYPE", seg_Asset);
		param.put("CD_SUPPLIER", supplier);
		param.put("CD_CUSTOMER", customer);
		param.put("CDDISCON", discon);
		
		return cm.transVOtoString(param);
	}
	
	private ArrayList<ItemVO> mapping(JSONArray arryObj) {
		JSONObject jsonObj = null;
		ArrayList<ItemVO> list = new ArrayList<ItemVO>();

		for(int i=0; i<arryObj.size(); i++) {
			jsonObj = new JSONObject();
			jsonObj = (JSONObject)arryObj.get(i);
			list.add((ItemVO) jsonObj.get("ItemVO"));
		}
	    
		return list;
	}
}
