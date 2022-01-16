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
import org.zerock.domain.WarehouseVO;
import org.zerock.service.ItemService;
import org.zerock.service.WarehouseService;

import lombok.NonNull;
import lombok.RequiredArgsConstructor;

@Controller	//스프링의 빈으로 인식토록
@RequestMapping("/warehouse/*")
@RequiredArgsConstructor 
public class WareHouseController {
	private Logger log = LogManager.getLogger(this.getClass());
	@NonNull
	private WarehouseService service;  
	@NonNull
	private ItemService itemService; 
	CommonMethod cm = new CommonMethod();

	@GetMapping("/warehouse(menu)")
	public void getWareMenu() {
		log.info("/warehouse/warehouse(menu)");
	}
	
	@GetMapping("/warehouse")
	public void getDashboard() {
		log.info("/warehouse/wareMain");
	}

	@GetMapping("/shipment")
	public void getShipment(Model model) {
		log.info("/warehouse/wareShip");
        model.addAttribute("customerList", itemService.getItemDataList(paramToMap("", "60", "", "", ""), "3"));
	}
	
	@PostMapping("/wareInfo")
	@ResponseBody
	public List<WarehouseVO> wareInfo() throws IOException {
		log.info("/warehouse/wareInfo");
		
		ArrayList<WarehouseVO> result = service.getWarehouseInfo("", "WARE_INFO");
	    
		return result;
	}
	
	@PostMapping("/domesticCount")
	@ResponseBody
	public List<WarehouseVO> domesticCount() throws IOException {
		log.info("/warehouse/domesticCount");
		
		ArrayList<WarehouseVO> result = service.getWarehouseInfo("", "WARE_DOMESTIC_COUNT");
	    
		return result;
	}
	
	@PostMapping("/domesticNotStockCount")
	@ResponseBody
	public List<WarehouseVO> domesticNotStockCount() throws IOException {
		log.info("/warehouse/domesticNotStockCount");
		
		ArrayList<WarehouseVO> result = service.getWarehouseInfo("", "WARE_DOMESTIC_NOT_STOCK");
	    
		return result;
	}
	
	@PostMapping("/shipmentStock")
	@ResponseBody
	public List<WarehouseVO> shipmentStock(@RequestBody Map<String, Object> param) throws IOException {
		log.info("/warehouse/shipmentStock");
		String data = cm.transVOtoString(param);
		
		ArrayList<WarehouseVO> result = service.getWarehouseInfo(data, "SHIP_STOCK");
	    
		return result;
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
