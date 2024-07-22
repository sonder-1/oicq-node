function get_slide_track(distance) {
  if (typeof distance !== 'number' || distance < 0) {
    return `distance类型必须是大于等于0的整数: distance: ${distance}, type: ${typeof distance}`;
  }
  // 初始化轨迹列表
  const slide_track = [
    [Math.floor(Math.random() * 40) - 50, Math.floor(Math.random() * 40) - 50, 0],
    [0, 0, 0],
  ];
  // 共记录count次滑块位置信息
  const count = 30 + Math.floor(distance / 2);
  // 初始化滑动时间
  let t = Math.floor(Math.random() * 50) + 50;
  // 记录上一次滑动的距离
  let _x = 0;
  let _y = 0;
  for (let i = 0; i < count; i++) {
    // 已滑动的横向距离
    const x = Math.round(__ease_out_expo(i / count) * distance);
    // 滑动过程消耗的时间
    t += Math.floor(Math.random() * 10) + 10;
    if (x === _x) {
      continue;
    }
    slide_track.push([x, _y, t]);
    _x = x;
  }
  slide_track.push(slide_track[slide_track.length - 1]);
  return slide_track;
}
