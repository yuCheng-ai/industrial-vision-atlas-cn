export const scenarios = [
  {title:'缺陷检测', items:['划痕','凹坑','污渍','异物','外观异常'], route:'光学成像 → 缺陷算法'},
  {title:'尺寸测量', items:['长度','孔位','间隙','轮廓'], route:'远心镜头 → 背光 → 几何测量'},
  {title:'OCR与识别', items:['字符','条码','二维码','标签'], route:'稳定光源 → 相机 → OCR'},
  {title:'定位引导', items:['机器人抓取','装配定位','贴合'], route:'相机标定 → 位姿计算'},
  {title:'3D检测', items:['高度','形变','体积','焊缝'], route:'结构光/激光 → 三维分析'}
];

export const components = [
  {type:'相机', choices:['面阵相机','线扫相机','3D相机','智能相机'], key:'分辨率、帧率、快门、接口'},
  {type:'镜头', choices:['定焦镜头','远心镜头','变焦镜头'], key:'焦距、放大倍率、景深、畸变'},
  {type:'光源', choices:['环形光','背光','同轴光','穹顶光','暗场光'], key:'方向、角度、反射特性'},
  {type:'接口', choices:['GigE Vision','USB3 Vision','CoaXPress','Camera Link'], key:'带宽、距离、同步'},
  {type:'算法', choices:['传统视觉','深度学习','混合方案'], key:'稳定性、数据量、验收'}
];

export const flows = [
  ['检测目标','缺陷 / 测量 / 识别 / 定位 / 3D'],
  ['工件特性','颜色 / 材质 / 反光 / 透明 / 运动'],
  ['成像方案','相机 + 镜头 + 光源'],
  ['算法路线','规则视觉或深度学习'],
  ['部署方案','智能相机 / 工控机 / 边缘计算']
];

export const mistakes = [
  '先买高清相机，再想怎么成像',
  '忽略光源，只优化算法',
  '所有问题都使用深度学习',
  '只看分辨率，不看视野和节拍',
  '没有提前定义验收指标'
];

export const glossary = [
  ['FOV','视野范围'],
  ['DOF','景深范围'],
  ['Global Shutter','全局快门'],
  ['Telecentric Lens','远心镜头'],
  ['OCR','字符识别'],
  ['GenICam','工业相机统一接口模型']
];
