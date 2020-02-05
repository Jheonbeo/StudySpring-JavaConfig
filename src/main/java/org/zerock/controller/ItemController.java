package org.zerock.controller;

import java.io.IOException;
import java.io.PrintWriter;
import java.io.UnsupportedEncodingException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.Map;

import javax.servlet.http.HttpServletRequest;
import javax.servlet.http.HttpServletResponse;

import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.servlet.mvc.support.RedirectAttributes;
import org.zerock.domain.ItemVO;
import org.zerock.service.ItemService;

import lombok.AllArgsConstructor;
import lombok.extern.log4j.Log4j;

import org.json.simple.JSONArray;
import org.json.simple.JSONObject;

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

	@GetMapping("/list")
	public void list(Model model) {
		log.info("list");
		model.addAttribute("list", service.getList());
	}
	
	@GetMapping("/register")
	public void register(Model model) throws UnsupportedEncodingException {        
		log.info("register");
		
        model.addAttribute("supplierList", service.getItemDataList("", 30, "", "", "", 3));
        model.addAttribute("customerList", service.getItemDataList("", 60, "", "", "", 3));
        model.addAttribute("jssLineList", service.getItemDataList("", 70, "", "", "", 3));
        model.addAttribute("tomasLineList", service.getItemDataList("", 80, "", "", "", 3));
        model.addAttribute("tomasWarehouseList", service.getItemDataList("", 85, "", "", "", 3));
	}
	
	//RedirectAttributes를 매개변수로 받는 이유는 등록 작업 후 목록화면으로 돌아가기 위함
	public String register(ItemVO item, RedirectAttributes rttr) {
		log.info("register: " + item);
		
		service.register(item);
		
		rttr.addFlashAttribute("result", item.getCD_ITEM());
		
		return "redirect:/item/list";	//redirect: 접두어를 사용시 response.sendRedirect()를 내부적으로 처리해줌.
	}
	
	@GetMapping("/get")
	public void get(@RequestParam("CD_ITEM") String CD_ITEM, Model model) {
		log.info("/get");
		model.addAttribute("item", service.get(CD_ITEM));
	}
	
	@PostMapping("/modify")
	public String modify(ItemVO item, RedirectAttributes rttr) {
		log.info("modify:" + item);
		
		if(service.modify(item)) {
			rttr.addFlashAttribute("result","success");
		}
		return "redirect:/item/list";
	}

	//삭제는 반드시 post
	@PostMapping("/remove")
	public String remove(@RequestParam("CD_ITEM") String CD_ITEM, RedirectAttributes rttr) {
		log.info("remove:" + CD_ITEM);
		
		if(service.remove(CD_ITEM)) {
			rttr.addFlashAttribute("result","success");
		}
		return "redirect:/item/list";
	}
	
	@PostMapping("/getSupplier")
	@ResponseBody
	public Object getSupplier(@RequestBody Map<String, Object> param) throws IOException {
		String segValue = (String) param.get("seg_asset");
		
		//service 객체를 controller가 붙잡고 있는거 같다. 새로운 객체로 DAO에 생성해서 하면 null 에러남
		//이유? 모르겠다; 생명주기랑 관련있는거 같은데 알수가 없네...

		Map<String, Object> map = new HashMap<>();
		
		if(segValue.equals("30")) {
			JSONArray arryObj = service.getItemDataList("", Integer.parseInt(segValue), "", "", "", 3);
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
		String cd_item = (String) param.get("cd_item");
		String seg_asset = (String) param.get("seg_asset");
		String supplier = (String) param.get("supplier");
		String customer = (String) param.get("customer");

		Map<String, Object> map = new HashMap<>();

		if(action == 1) {
			JSONArray arryObj = service.getItemDataList(cd_item, 0, "", "", "NG", action);
			map.put("itemData", mapping(arryObj));
		    
			return map;
		}
		else {
			JSONArray arryObj = service.getItemDataList(cd_item, Integer.parseInt(seg_asset), supplier, customer, "NG", action);
			map.put("itemData", mapping(arryObj));
		    
			return map;
		}
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
