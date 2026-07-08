export interface Scenario {
  title: string;
  category: string;
  items: string[];
  route: string;
  imaging: string;
  lighting: string;
  camera: string;
  lens: string;
  algorithm: string;
  acceptance: string[];
  avoid: string[];
}

export interface ComponentGroup {
  type: string;
  key: string;
  choices: string[];
  goodFor: string[];
  selectionTips: string[];
}

export interface FlowStep {
  title: string;
  question: string;
  output: string;
}

export interface Playbook {
  title: string;
  industry: string;
  scenes: string[];
  minimal: string[];
  production: string[];
  risk: string[];
}

export const scenarios: Scenario[] = [
  {
    title: '外观缺陷检测',
    category: '检测',
    items: ['划痕', '凹坑', '污渍', '异物', '外观异常'],
    route: '光学成像 → 缺陷增强 → 规则/深度学习判断',
    imaging: '优先把缺陷和背景拉开对比，必要时使用多角度成像。',
    lighting: '暗场光、低角度光、穹顶光、偏振光。',
    camera: '面阵相机，全局快门，高分辨率按视野和缺陷尺寸计算。',
    lens: '定焦镜头；精密检测考虑远心镜头。',
    algorithm: '规则视觉适合稳定缺陷；复杂纹理用异常检测或分割。',
    acceptance: ['漏检率', '误检率', '最小可检缺陷尺寸', '节拍'],
    avoid: ['只提高像素不处理光源', '没有定义缺陷样本边界', '训练集只放理想图片'],
  },
  {
    title: '尺寸测量',
    category: '测量',
    items: ['长度', '孔位', '间隙', '轮廓', '边缘距离'],
    route: '背光/远心成像 → 标定 → 边缘定位 → 几何测量',
    imaging: '优先获得稳定清晰边缘，减少透视误差和畸变。',
    lighting: '背光、平行光、稳定漫射光。',
    camera: '按视野、精度和像素分辨率计算，不盲目追高像素。',
    lens: '远心镜头优先；普通镜头要控制畸变和工作距离。',
    algorithm: '边缘检测、亚像素定位、相机标定、几何拟合。',
    acceptance: ['重复精度', 'GRR', '标定误差', '温漂影响'],
    avoid: ['忽略机械振动', '忽略镜头畸变', '拿普通拍照效果当测量依据'],
  },
  {
    title: 'OCR / 条码识别',
    category: '识别',
    items: ['字符', '喷码', '二维码', '条码', '标签'],
    route: '均匀成像 → 定位 → OCR/读码 → 置信度校验',
    imaging: '保证字符对比度、清晰度和角度稳定。',
    lighting: '同轴光、面光、条形光，反光表面加偏振。',
    camera: '面阵相机或智能读码器，按码制尺寸和移动速度选帧率。',
    lens: '定焦镜头，保证字符区域景深。',
    algorithm: '传统读码、OCR、深度学习 OCR、OCV。',
    acceptance: ['识别率', '误读率', '单件识别时间', '字符最小高度'],
    avoid: ['不控制字符反光', '字符太小仍要求高速识别', '没有误读复核机制'],
  },
  {
    title: '机器人定位引导',
    category: '定位',
    items: ['抓取', '姿态', '装配定位', '贴合', '点胶'],
    route: '相机标定 → 目标定位 → 坐标转换 → 机器人执行',
    imaging: '稳定看到定位特征，必要时使用 3D 获取高度和姿态。',
    lighting: '稳定补光、背光、结构光，依据目标材质选择。',
    camera: '2D 工业相机或 3D 相机，关注同步、触发和坐标标定。',
    lens: '定焦镜头；需要减少透视误差时使用远心镜头。',
    algorithm: '模板匹配、特征定位、目标检测、姿态估计、手眼标定。',
    acceptance: ['定位精度', '重复定位误差', '拍照到出坐标时间', '抓取成功率'],
    avoid: ['忽略坐标系转换', '只看识别率不看执行误差', '没有处理遮挡和堆叠'],
  },
  {
    title: '连续材料检测',
    category: '高速检测',
    items: ['钢带', '薄膜', '纸张', '布料', '电池极片'],
    route: '线扫相机 → 编码器同步 → 连续拼接 → 缺陷检测',
    imaging: '线阵扫描，依赖稳定运动和同步触发。',
    lighting: '线光源、高亮频闪、暗场线光。',
    camera: '线扫相机，重点看线频、带宽、接口和缓存。',
    lens: '线扫镜头或高质量定焦镜头。',
    algorithm: '图像拼接、背景校正、缺陷检测、分级。',
    acceptance: ['最大线速度', '最小缺陷尺寸', '漏检率', '带宽余量'],
    avoid: ['按普通面阵方案设计', '不接编码器', '忽略传输带宽'],
  },
  {
    title: '3D 高度 / 胶路 / 焊缝检测',
    category: '3D',
    items: ['高度', '体积', '形变', '胶路', '焊缝'],
    route: '3D 成像 → 点云/轮廓 → 高度或形貌分析',
    imaging: '根据材料和节拍选择结构光、激光轮廓、ToF 或双目。',
    lighting: '3D 方案自带投光或激光，需控制环境光干扰。',
    camera: '3D 相机、激光轮廓仪或结构光相机。',
    lens: '依据 3D 设备方案确定。',
    algorithm: '点云处理、轮廓拟合、高度图分析、缺陷分割。',
    acceptance: ['Z 向精度', '点云完整率', '遮挡率', '节拍'],
    avoid: ['用 2D 颜色判断高度问题', '忽略遮挡', '只看演示点云不做节拍验证'],
  },
];

export const components: ComponentGroup[] = [
  { type: '相机', choices: ['面阵相机', '线扫相机', '3D相机', '智能相机'], key: '分辨率、帧率、快门、接口、传感器尺寸', goodFor: ['成像采集', '定位', '检测', '测量'], selectionTips: ['先算视野和最小缺陷', '再算像素分辨率', '最后校验帧率和带宽'] },
  { type: '镜头', choices: ['定焦镜头', '远心镜头', '变焦镜头', '线扫镜头'], key: '焦距、放大倍率、景深、畸变、工作距离', goodFor: ['成像质量', '测量精度', '视野控制'], selectionTips: ['测量优先考虑远心', '大视野注意畸变', '景深不足会导致边缘不稳定'] },
  { type: '光源', choices: ['环形光', '背光', '同轴光', '穹顶光', '暗场光', '条形光'], key: '方向、角度、颜色、亮度、均匀性', goodFor: ['增强对比', '压制反光', '突出轮廓'], selectionTips: ['先做打光实验', '缺陷检测多试角度', '反光件考虑偏振和穹顶'] },
  { type: '接口', choices: ['GigE Vision', 'USB3 Vision', 'CoaXPress', 'Camera Link'], key: '带宽、线缆距离、触发同步、成本', goodFor: ['数据传输', '多相机同步', '高速采集'], selectionTips: ['普通距离用 GigE', '短距离高速用 USB3', '高速高稳定用 CoaXPress'] },
  { type: '算法', choices: ['传统视觉', '深度学习', '混合方案'], key: '稳定性、样本量、可解释性、验收方式', goodFor: ['定位', '测量', '识别', '缺陷判断'], selectionTips: ['测量优先传统视觉', '复杂纹理可用深度学习', '工程上常用混合方案'] },
  { type: '部署', choices: ['智能相机', '工控机', '边缘GPU', 'PLC联动'], key: '节拍、稳定性、维护成本、接口', goodFor: ['产线落地', '控制集成', '边缘推理'], selectionTips: ['简单项目可用智能相机', '复杂多相机用工控机', '深度学习考虑 GPU'] },
];

export const flows: FlowStep[] = [
  { title: '检测目标', question: '缺陷、测量、识别、定位还是 3D？', output: '确定任务类型和验收指标' },
  { title: '工件特性', question: '材质、颜色、反光、透明、尺寸、运动状态是什么？', output: '决定打光和成像难点' },
  { title: '视野与精度', question: '视野多大，最小要看清多少，节拍多快？', output: '计算相机分辨率、帧率和带宽' },
  { title: '光学方案', question: '用什么光源、镜头和安装角度能稳定成像？', output: '形成可复现图像' },
  { title: '算法路线', question: '规则可解决，还是需要深度学习？', output: '确定传统视觉、深度学习或混合方案' },
  { title: '部署验收', question: '和 PLC/机器人怎么联动，如何判定通过？', output: '定义节拍、误检漏检、稳定性和维护方式' },
];

export const playbooks: Playbook[] = [
  { title: '3C 电子外观检测', industry: '3C电子', scenes: ['连接器缺陷', '壳体划痕', '螺丝漏装', '标签 OCR'], minimal: ['面阵相机', '多角度光源', '传统视觉 + 深度学习'], production: ['多工位相机', '工控机', '缺陷样本库', 'MES/PLC联动'], risk: ['反光和小缺陷', '样本边界不清', '节拍压力'] },
  { title: '新能源极片 / 焊缝检测', industry: '新能源', scenes: ['极片表面', '焊缝', '胶路', '尺寸'], minimal: ['线扫相机', '线光源', '编码器同步'], production: ['高速线扫', 'GPU 工控机', '缺陷分级', '数据追溯'], risk: ['高速带宽', '漏检成本高', '环境稳定性'] },
  { title: '机械加工尺寸测量', industry: '机械加工', scenes: ['孔位', '间隙', '外形轮廓', '装配确认'], minimal: ['背光', '远心镜头', '边缘测量'], production: ['标定治具', 'GRR 验证', 'SPC 数据输出'], risk: ['机械定位误差', '温漂', '镜头畸变'] },
  { title: '包装食品读码检测', industry: '包装食品', scenes: ['标签识别', '日期喷码', '条码二维码', '有无检测'], minimal: ['面阵相机或读码器', '均匀光源', 'OCR/读码算法'], production: ['剔除机构联动', '误读复核', '批次追溯'], risk: ['包装反光', '字符变形', '高速运动模糊'] },
];

export const mistakes = [
  '先买高清相机，再想怎么成像',
  '忽略光源，只优化算法',
  '所有问题都使用深度学习',
  '只看分辨率，不看视野、精度、节拍和带宽',
  '没有提前定义漏检率、误检率和验收指标',
  '不做现场光照、震动、粉尘、温度评估',
  '把实验室 demo 当成产线稳定性',
];

export const glossary = [
  ['FOV', '视野范围，决定一次拍摄能看到多大区域'],
  ['DOF', '景深范围，决定前后高度变化时图像是否清晰'],
  ['Global Shutter', '全局快门，适合运动物体，减少拖影和变形'],
  ['Rolling Shutter', '卷帘快门，成本低但运动场景容易变形'],
  ['Telecentric Lens', '远心镜头，减少透视误差，常用于精密测量'],
  ['Backlight', '背光，常用于轮廓和尺寸测量'],
  ['Dark Field', '暗场光，常用于凸显划痕、边缘和表面缺陷'],
  ['OCR', '字符识别'],
  ['OCV', '字符验证，判断字符是否正确而不只是读出来'],
  ['GenICam', '工业相机统一接口模型'],
];
