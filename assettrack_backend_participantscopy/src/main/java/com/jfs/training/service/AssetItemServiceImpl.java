package com.jfs.training.service;

import java.util.ArrayList;
import java.util.List;

import org.springframework.beans.factory.annotation.Autowired;
import org.springframework.stereotype.Service;

import com.jfs.training.bean.AssetItemBean;
import com.jfs.training.dao.AssetItemDAOWrapper;
import com.jfs.training.entity.AssetItemEntity;

@Service
public class AssetItemServiceImpl implements AssetItemService {

    @Autowired
    private AssetItemDAOWrapper assetItemDAOWrapper;

    // ToDo Item 1.4
    // Invoke DAO wrapper method to save asset details

    @Override
    public AssetItemBean addAssetItem(AssetItemBean assetItemBean) {

        // Write your code here
    
    AssetItemEntity assetItemEntity=new AssetItemEntity();
   
    	assetItemEntity.setAssetCode(assetItemBean.getAssetCode());
    	assetItemEntity.setAssetName(assetItemBean.getAssetName());
    	assetItemEntity.setCategory(assetItemBean.getCategory());
    	assetItemEntity.setAssignedTo(assetItemBean.getAssignedTo());
    	assetItemEntity.setStatus(assetItemBean.getStatus());
    
    AssetItemEntity savedEntity=assetItemDAOWrapper.addAssetItem(assetItemEntity);
    
    AssetItemBean savedBean=new AssetItemBean();
    	
    savedBean.setId(savedEntity.getId());
    savedBean.setAssetCode(savedEntity.getAssetCode());
    savedBean.setAssetName(savedEntity.getAssetName());
    savedBean.setCategory(savedEntity.getCategory());
    savedBean.setAssignedTo(savedEntity.getAssignedTo());
    savedBean.setStatus(savedEntity.getStatus());
    	
        return savedBean;
    }

    // ToDo Item 1.5
    // Invoke DAO wrapper method to fetch asset records

    @Override
    public List<AssetItemBean> getAllAssetItems() {

        // Write your code here
    	List<AssetItemEntity> entityList = assetItemDAOWrapper.getAllAssetItems();
    	List<AssetItemBean> beanList = new ArrayList<>();
    	
    	for(AssetItemEntity entity:entityList)
    	{
    		AssetItemBean bean=new AssetItemBean();
    		bean.setId(entity.getId());
    		bean.setAssetCode(entity.getAssetCode());
    		bean.setAssetName(entity.getAssetName());
    		bean.setCategory(entity.getCategory());
    		bean.setAssignedTo(entity.getAssignedTo());
    		bean.setStatus(entity.getStatus());
    	}

        return beanList;
    }
}