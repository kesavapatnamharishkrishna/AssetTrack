package com.jfs.training.service;

import java.util.List;

import com.jfs.training.bean.AssetItemBean;

public interface AssetItemService {

    AssetItemBean addAssetItem(AssetItemBean assetItemBean);

    List<AssetItemBean> getAllAssetItems();
}