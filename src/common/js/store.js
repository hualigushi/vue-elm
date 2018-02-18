export function saveToLocal (id, key, value) {
  let seller = window.localStorage.__seller__;// 私有命名空间
  if (!seller) { // 如果没有seller则初始化
    seller = {};
    seller[id] = {};// 每个id 都是单独的object
  } else {
    // localStorage存取的是JSON字符串
    seller = JSON.parse(seller);
    // 如果没有该商家
    if (!seller[id]) {
      seller[id] = {};
    }
  }
  seller[id][key] = value;// 存储的数据
  localStorage.__seller__ = JSON.stringify(seller);
};

export function loadFromLocal (id, key, def) {
    let seller = window.localStorage.__seller__;
    if (!seller) { // 如果没有创建则返回默认值
      return def;
    }
    seller = JSON.parse(seller)[id];
    if (!seller) { // 如果没有id创建则返回默认值
      return def;
    }
    let ret = seller[key];// 如果没有key创建则返回默认值
    return ret || def;
};
