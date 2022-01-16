package org.zerock.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.HashMap;
import java.util.List;
import java.util.Map;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestBody;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zerock.common.CommonMethod;
import org.zerock.domain.IdenVO;
import org.zerock.domain.ItemVO;
import org.zerock.service.ItemService;
import org.zerock.service.ShipService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Controller
@RequestMapping("/item/*")	
@RequiredArgsConstructor 
public class ItemController {
	private Logger log = LogManager.getLogger(this.getClass());
	@NonNull
	private ItemService itemService;  
	@NonNull
	private ShipService shipService;  
	CommonMethod cm = new CommonMethod();

	@GetMapping("/item_list")
	public void getlist() {
		log.info("/item/item_list(Get)");
	}

	@PostMapping("/item_list")
	public void postlist(ItemVO itemVO, Model model) {
		log.info("/item/item_list(Post)");
        model.addAttribute("item", itemVO);
	}
	
	@PostMapping("/check_item")
	@ResponseBody
	public List<ItemVO> check_item(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/item/check_item");
		String data = cm.transVOtoString(param);

		ArrayList<ItemVO> item = itemService.getItemDataList(data, "CHECK_ITEM");
	    
		return item;
	}

	@GetMapping("/item_modify")
	public void getModify(ItemVO itemVO, Model model) {
		log.info("/item/item_modify(Get)");
        model.addAttribute("jssLineList", itemService.getItemDataList(paramToMap("", "70", "", "", ""), "3"));
        model.addAttribute("tomasLineList", itemService.getItemDataList(paramToMap("", "80", "", "", ""), "3"));
        model.addAttribute("tomasWarehouseList", itemService.getItemDataList(paramToMap("", "85", "", "", ""), "3"));
        model.addAttribute("item", itemVO);//service.getItemDataList(data, 4));
	}

	@PostMapping("/item_modify")
	public void postModify(ItemVO param, Model model) {
		log.info("/item/item_modify(Post)");
        model.addAttribute("jssLineList", itemService.getItemDataList(paramToMap("", "70", "", "", ""), "3"));
        model.addAttribute("tomasLineList", itemService.getItemDataList(paramToMap("", "80", "", "", ""), "3"));
        model.addAttribute("tomasWarehouseList", itemService.getItemDataList(paramToMap("", "85", "", "", ""), "3"));
        model.addAttribute("item", param);
	}
	
	@PostMapping("/getItem")
	@ResponseBody
	public Object getItem(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/item/getItem(Post)");
		param.put("CDDISCON", "NG");
		String data = cm.transVOtoString(param);
		
		ArrayList<ItemVO> item = itemService.getItemDataList(data, (String) param.get("ACTION"));
	    
		return item;
	}

	@PostMapping("/setItem")
	@ResponseBody
	public Object setItem(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/item/setItem(Post)");
		String data = cm.transVOtoString(param);
		ArrayList<ItemVO> item = itemService.getItemDataList(data, "5");
		
		return item;
	}
	
	@GetMapping("/item_register")
	public void register(Model model) {
		log.info("/item/item_register(Get)");
        model.addAttribute("supplierList", itemService.getItemDataList(paramToMap("", "30", "", "", ""), "3"));
        model.addAttribute("customerList", itemService.getItemDataList(paramToMap("", "60", "", "", ""), "3"));
        model.addAttribute("jssLineList", itemService.getItemDataList(paramToMap("", "70", "", "", ""), "3"));
        model.addAttribute("tomasLineList", itemService.getItemDataList(paramToMap("", "80", "", "", ""), "3"));
        model.addAttribute("tomasWarehouseList", itemService.getItemDataList(paramToMap("", "85", "", "", ""), "3"));
	}
	
	@PostMapping("/getSupplier")
	@ResponseBody
	public Object getSupplier(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/item/getSupplier(Post)");
		String segValue = (String) param.get("seg_asset");
		
		ArrayList<ItemVO> arryObj = new ArrayList<>();
		if(segValue.equals("30")) {
			arryObj = itemService.getItemDataList(paramToMap("", segValue, "", "", ""), "3");
		}
		//map.put("segValue", segValue);

		return arryObj;
	}

	@GetMapping("/identification")
	public void list(Model model) {
		log.info("/item/identification");
	}
	
	@PostMapping("/getIdenData")
	@ResponseBody
	public Object getIdenData(@RequestBody Map<String, Object> param) {
		log.info("/item/getIdenData");
		String data = cm.transVOtoString(param);
		
		IdenVO idenInfo = shipService.getIdenInfo(data, "IDEN_INFO");
	    
		return idenInfo;
	}

	@SuppressWarnings("unchecked")
	@PostMapping("/setIdenData")
	@ResponseBody
	public Object setIdenData(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/item/setIdenData");
		Map<String, Object> temp = (Map<String, Object>) param.get("DATA");
		String data = cm.transVOtoString(temp);
		
		IdenVO idenInfo = shipService.setIdenInfo(data, "REG_IDEN");
		
		return idenInfo;
	}
	
	private String paramToMap(String cdItem, String seg_Asset, String supplier, String customer, String discon) {
		Map<String, Object> param = new HashMap<>();
		
		param.put("CD_ITEM", cdItem);
		param.put("CD_TYPE", seg_Asset);
		param.put("CD_SUPPLIER", supplier);
		param.put("CD_CUSTOMER", customer);
		param.put("CDDISCON", discon);
		
		return cm.transVOtoString(param);
	}
}
