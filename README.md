# Camino al A2

在线地址：https://kwq-1234.github.io/camino-al-a2/

零基础西班牙语 30 周自学网站。单页静态站，无需构建，打开 `index.html` 即可使用。

- 每天 30 分钟：复习卡 → 新课 → 练习 → 听说任务；周六复习，周日周测。
- 第 1–10 周（`lessons-n1.js` … `lessons-n3.js`）：每课只学一件事，讲解分小步并带即时练习，例句逐词拆解，且只使用已教过的词。
- 第 11–30 周（`lessons-p2.js` … `lessons-p6.js`）：A1 → A2 语法主线与主题巩固。
- 复习卡为站内 Leitner 间隔重复，进度存在浏览器 localStorage。
- 朗读使用浏览器语音合成（Web Speech API）；macOS 建议下载「Mónica（增强）」语音。

## 本地运行

```bash
python3 -m http.server 8000
```

然后打开 http://localhost:8000 。

## 内容校验

前 10 周课程遵循 `tools/SCHEMA2.md`，用下面的命令校验结构和「例句只用学过的词」：

```bash
node tools/check2.js lessons-n1.js lessons-n2.js lessons-n3.js
```
