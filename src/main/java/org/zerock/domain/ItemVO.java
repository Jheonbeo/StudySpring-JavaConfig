package org.zerock.domain;

import java.util.Date;

import lombok.Data;

@Data
public class ItemVO {
	private String CD_ITEM;
	private String NM_ITEM;
	private String DTS_START;
	private int BOX_SNP;
	private int ITEM_UPH;
	private String SEG_ASSET;
	private Date CRT_DAT;
	private Date UPD_DAT;
}
