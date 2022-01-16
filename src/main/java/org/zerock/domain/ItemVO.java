package org.zerock.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ItemVO {
	private String CD_ITEM;
	private String NM_ITEM;
	private String CD_LINE;
	private String CD_STOCK;
	private String WAREHOUSE;
	private String CD_SUPPLIER;
	private String NM_SUPPLIER;
	private String CD_CUSTOMER;
	private String NM_CUSTOMER;
	private int SAFETY_STOCK;
	private int PRODUCTION_MINIMUM;
	private int BOX_SNP;
	private int MASTER_SNP;
	private int SHIP_SNP;
	private int WARE_SNP;
	private int SMALL_SNP;
	private int EXPORT_SNP;
	private int MINIMUM_STOCK;
	private String SEG_ASSET;
	private int LEAD_TIME;
	private String UNT_UNIT;
	private int FLATCAR;
	private String CD_SUB;
	private int ITEM_UPH;
	private int SAFETY_PERCENT;
	private String DTS_START;
	private String DTS_END;
	private String PROCESSING1;
	private String PROCESSING2;
	private String PROCESSING3;
	private String PROCESSING4;
	private String PROCESSING5;
	private String PROCESSING6;
	private String PROD_LINE01;
	private String PROD_LINE02;
	private String PROD_LINE03;
	private String PROD_LINE04;
	private String PROD_LINE05;
	private int PARALLEL;
	private String FREE_AREA;
	private String STOP_PRODUCTION;
	private String CD_TYPE;
	private String BACK_FLUSH;
	private String OTHER;
	private String CYCLE_TIME;
	private String PACKAGING_INFO;
	private String REPLACEMENT_ITEM;
	private String REPLACEMENT_ITEM1;
	private String REPLACEMENT_ITEM2;
	private String REPLACEMENT_ITEM3;
	private String REPLACEMENT_ITEM4;
	
	private String IDENTIFICATION;
	private String PBOM;
	private String JIG;
	private String CHECKSHEET;
	
	private Date CRT_DAT;
	private String CRT_USR;
	private Date UPD_DAT;
	private String UPD_DAT_TEXT;
	private String UPD_USR;
	
	private String ACTION;
}
