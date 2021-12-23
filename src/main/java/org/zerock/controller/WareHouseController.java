package org.zerock.controller;

import java.io.IOException;
import java.util.ArrayList;
import java.util.List;

import org.apache.logging.log4j.LogManager;
import org.apache.logging.log4j.Logger;
import org.springframework.stereotype.Controller;
import org.springframework.ui.Model;
import org.springframework.web.bind.annotation.GetMapping;
import org.springframework.web.bind.annotation.PostMapping;
import org.springframework.web.bind.annotation.RequestMapping;
import org.springframework.web.bind.annotation.ResponseBody;
import org.zerock.common.CommonMethod;
import org.zerock.domain.WarehouseVO;
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
	CommonMethod cm = new CommonMethod();

	@GetMapping("/warehouse")
	public void getWareHouse(Model model) {
		log.info("/warehouse/warehouse");
	}

	@GetMapping("/wareMain")
	public void getDashboard() {
		log.info("/warehouse/wareMain");
	}

	@GetMapping("/wareShip")
	public void getShipment() {
		log.info("/warehouse/wareShip");
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
}
