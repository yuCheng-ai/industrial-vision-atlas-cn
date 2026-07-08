export interface KnowledgeItem {
  title: string;
  body: string;
  source: string;
}

export interface KnowledgeGroup {
  title: string;
  intro: string;
  items: KnowledgeItem[];
}

export const overviewGroups: KnowledgeGroup[] = [
  {
    title: '系统构成',
    intro: '工业视觉系统通常由成像、处理、软件和输出控制组成。不同项目的差异主要体现在光学、运动、接口、算法和控制系统集成。',
    items: [
      { title: '照明 / 光源', body: '光源决定目标、背景、缺陷和边缘的对比关系，是检测稳定性的基础条件。', source: 'Cognex Introduction to Machine Vision：hardware components / lighting' },
      { title: '镜头 / 光学', body: '镜头影响视野、工作距离、景深、畸变和测量一致性。精密测量通常需要控制畸变和透视误差。', source: 'Edmund Optics / Cognex 机器视觉光学资料' },
      { title: '相机 / 传感器', body: '相机参数包括分辨率、像元尺寸、传感器尺寸、快门方式、帧率、动态范围、噪声和接口。', source: 'EMVA 1288 camera characterization standard' },
      { title: '接口 / 采集', body: '工业相机常见接口包括 GigE Vision、USB3 Vision、Camera Link、Camera Link HS、CoaXPress。接口影响带宽、距离、同步和采集架构。', source: 'A3 Vision Standards / EMVA GenICam' },
      { title: '处理 / 软件', body: '软件层包括图像采集、预处理、定位、测量、识别、缺陷检测、结果输出和数据记录。', source: 'OpenCV docs / Cognex image analysis software' },
      { title: '输出 / 控制', body: '输出通常包括 OK/NG、坐标、尺寸数值、缺陷类别、读码结果、报警、剔除信号或向 PLC、机器人、MES 传递数据。', source: 'Cognex / A3 machine vision introduction' },
    ],
  },
];

export const opticsGroups: KnowledgeGroup[] = [
  {
    title: '光源类型',
    intro: '光源按入射方向、均匀性、波长和几何结构区分。实际项目应记录光源类型、角度、距离、亮度、颜色和触发方式。',
    items: [
      { title: '背光', body: '用于轮廓、孔位、边缘、尺寸测量。适合形成高对比轮廓，不适合观察表面纹理。', source: 'Cognex lighting guide / machine vision lighting practice' },
      { title: '环形光', body: '用于一般表面照明和有无检测。角度不同会改变反射、阴影和边缘表现。', source: 'Cognex lighting guide' },
      { title: '同轴光', body: '用于平面反光表面的字符、印刷、划痕或局部反射差异观察。', source: 'Cognex lighting guide' },
      { title: '低角度 / 暗场光', body: '用于突出划痕、压伤、边缘和微小凸起。对安装角度和表面反射较敏感。', source: 'Cognex lighting guide' },
      { title: '穹顶光 / 漫射光', body: '用于降低曲面、金属、塑料件表面的强反光，获得更均匀的外观图像。', source: 'Cognex lighting guide' },
      { title: '线光源', body: '常与线扫相机、激光轮廓或高速连续材料检测配合使用。', source: 'Line scan camera vendor application notes' },
    ],
  },
  {
    title: '镜头与成像参数',
    intro: '镜头页应围绕视野、工作距离、放大倍率、景深、畸变和分辨率，而不是只罗列镜头名称。',
    items: [
      { title: '视野 FOV', body: '相机一次成像覆盖的实际物理范围。像素精度计算必须同时知道视野和传感器分辨率。', source: 'Edmund Optics imaging fundamentals' },
      { title: '工作距离 WD', body: '镜头前端到被测物之间的距离。影响安装空间、放大倍率和照明布置。', source: 'Edmund Optics imaging fundamentals' },
      { title: '景深 DOF', body: '物体前后移动仍能保持可用清晰度的范围。高度波动、振动和治具误差会占用景深余量。', source: 'Edmund Optics imaging fundamentals' },
      { title: '畸变', body: '镜头造成的几何变形会影响测量一致性。尺寸测量项目需要标定或使用低畸变/远心方案。', source: 'Edmund Optics imaging fundamentals' },
      { title: '远心镜头', body: '远心镜头用于降低透视误差，适合精密尺寸测量和物距变化较小但精度要求较高的场景。', source: 'Edmund Optics telecentric lens resources' },
    ],
  },
];

export const cameraGroups: KnowledgeGroup[] = [
  {
    title: '相机类型',
    intro: '相机类型与工件运动方式、视野形状、速度、分辨率和采集架构相关。',
    items: [
      { title: '面阵相机', body: '一次采集二维图像，适合静止或间歇运动工件、尺寸测量、外观检测、定位和 OCR。', source: 'Industrial camera vendor application notes' },
      { title: '线扫相机', body: '逐行采集图像，适合卷材、薄膜、纸张、钢带、电池极片等连续运动材料。通常需要稳定运动和编码器同步。', source: 'Line scan camera vendor application notes' },
      { title: '3D 相机 / 轮廓仪', body: '获取高度、轮廓、点云或深度信息，适合胶路、焊缝、高度差、体积、形变等 2D 图像难以表达的任务。', source: '3D vision camera vendor documentation' },
      { title: '智能相机', body: '将采集、处理和部分 I/O 集成在相机内部，适合结构较简单、部署空间有限或维护要求明确的单工位检测。', source: 'Cognex types of machine vision systems' },
    ],
  },
  {
    title: '相机性能参数',
    intro: '工业相机参数应以标准化指标和应用约束共同描述。EMVA 1288 提供了机器视觉传感器和相机规格测量与呈现方法。',
    items: [
      { title: '分辨率', body: '决定图像像素数量。是否足够取决于视野大小、最小特征尺寸和算法需求。', source: 'EMVA 1288 / camera datasheets' },
      { title: '像元尺寸', body: '影响采样、灵敏度和镜头匹配。需要结合传感器尺寸、镜头分辨率和照明条件评估。', source: 'EMVA 1288 / sensor datasheets' },
      { title: '快门方式', body: '全局快门适合运动目标，卷帘快门在运动场景可能产生几何变形。', source: 'Industrial camera documentation' },
      { title: '帧率 / 线频', body: '受分辨率、曝光时间、接口带宽和相机内部处理影响。高速项目需要同时核算采集和传输。', source: 'Industrial camera documentation' },
      { title: '动态范围与噪声', body: '影响明暗共存场景和低对比缺陷。EMVA 1288 用于客观描述相机噪声、灵敏度和动态范围等指标。', source: 'EMVA 1288' },
    ],
  },
];

export const interfaceGroups: KnowledgeGroup[] = [
  {
    title: '工业视觉接口标准',
    intro: '接口决定图像传输带宽、距离、实时性、同步方式、软件生态和采集卡需求。GenICam 负责在不同相机接口之上提供通用编程接口。',
    items: [
      { title: 'GenICam', body: '通用相机接口标准，用于降低上层应用对 GigE Vision、USB3 Vision、CoaXPress、Camera Link 等传输技术的依赖。', source: 'EMVA GenICam' },
      { title: 'GigE Vision', body: '基于以太网的工业相机接口，常用于较长距离、网络化连接和多相机系统。', source: 'A3 Vision Standards' },
      { title: 'USB3 Vision', body: '基于 USB3 的工业相机接口，常用于短距离、高带宽、即插即用型系统。', source: 'A3 Vision Standards' },
      { title: 'Camera Link / Camera Link HS', body: '传统高速视觉接口，常见于高带宽、低延迟、需要采集卡的工业系统。', source: 'A3 Vision Standards' },
      { title: 'CoaXPress', body: '基于同轴电缆的高速接口，适合高分辨率、高帧率或多通道高速采集场景。', source: 'A3 / JIIA CoaXPress standard' },
      { title: '采集卡', body: '在部分 Camera Link、CoaXPress 或高速多相机系统中用于接收、缓存、触发和同步图像数据。', source: 'Frame grabber vendor documentation' },
    ],
  },
];

export const sourceGroups: KnowledgeGroup[] = [
  {
    title: '标准与组织',
    intro: '优先引用标准组织和行业协会资料，用于接口、相机指标和通用定义。',
    items: [
      { title: 'EMVA 1288', body: '机器视觉传感器和相机规格的测量与呈现标准。', source: 'https://www.emva.org/standards-technology/emva-1288/' },
      { title: 'EMVA GenICam', body: '工业相机通用编程接口标准。', source: 'https://www.emva.org/standards-technology/genicam/' },
      { title: 'A3 Vision Standards', body: 'GigE Vision、USB3 Vision、Camera Link、Camera Link HS、CoaXPress 等视觉接口标准资源。', source: 'https://www.automate.org/vision/vision-standards/vision-standards' },
      { title: 'Cognex Introduction to Machine Vision', body: '机器视觉定义、应用、硬件组成、照明和软件分析的行业资料。', source: 'https://www.cognex.com/what-is/machine-vision' },
      { title: 'OpenCV Documentation', body: '图像处理、阈值、形态学、轮廓、特征和传统视觉算法资料。', source: 'https://docs.opencv.org/' },
      { title: 'PaddleOCR', body: 'OCR 模型、训练、推理与部署资料。', source: 'https://github.com/PaddlePaddle/PaddleOCR' },
      { title: 'Anomalib', body: '工业异常检测模型和部署资料。', source: 'https://github.com/openvinotoolkit/anomalib' },
    ],
  },
];
