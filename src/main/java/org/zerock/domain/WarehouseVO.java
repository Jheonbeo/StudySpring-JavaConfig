package org.zerock.domain;

import lombok.Data;

@Data
public class WarehouseVO {
	private String YYYYMMDD;
	private String CD_ITEM;
	private String BOX_SNP;
	private String MODEL;
	private String SUPP_FROM;
	private String WARE_TO;
	private String ALL_ORDER_COUNT;
	private String PLAN_STOCK_COUNT;
	private String NOT_PLAN_STOCK_COUNT;
	private String STOCK_QUANTITY;
	private String PROD_QUANTITY;
	private String WARE_TODAY_QUANTITY;
	private String HOLD_STOCK;
	private String SHIP_QUANTITY;
	private String CURRENT_QUANTITY;
}
