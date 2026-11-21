package com.jfs.training;

import static org.junit.jupiter.api.Assertions.assertNotNull;
import static org.junit.jupiter.api.Assertions.assertTrue;

import javax.transaction.Transactional;

import org.junit.jupiter.api.Test;
import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.boot.test.context.SpringBootTest;

import com.jfs.training.bean.AssetItemBean;
import com.jfs.training.service.AssetItemService;


@SpringBootTest
public class AssetItemServiceTest {
	
	@Autowired
	private AssetItemService assetItemService;

    @Test
    public void testAddAssetItem() {

        // ToDo Test Case 1
        // Verify asset item can be added successfully
        // using service layer
    	
    	AssetItemBean bean=new AssetItemBean();
    	bean.setAssetCode("AST-TEST-1");
    	bean.setAssetName("Test Laptop");
    	bean.setCategory("Electronics");
    	bean.setAssignedTo("John Doe");
    	bean.setStatus("Available");
    			
    	AssetItemBean savedBean = assetItemService.addAssetItem(bean);
    	assertNotNull(savedBean);
    	assertNotNull(savedBean.getId());
    }

    @Test
    public void testGetAllAssetItems() {

        // ToDo Test Case 2
        // Verify fetching asset items returns
        // a non-null list

    	assertNotNull(assetItemService.getAllAssetItems());
    	
    }

    @Test
    public void testAddAndFetchAssetItems() {

        // ToDo Test Case 3
        // Verify end-to-end add and fetch flow
    	
    	AssetItemBean bean =new AssetItemBean();
    	bean.setAssetCode("AST-TEST-2");
    	bean.setAssetName("Test Monitor");
    	bean.setCategory("Electronics");
    	bean.setAssignedTo("Jane Doe");
    	bean.setStatus("Available");
    	
    	assetItemService.addAssetItem(bean);
    	assertTrue(assetItemService.getAllAssetItems().size()>0);

    }
}
