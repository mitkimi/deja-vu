const resultComps = {}

let requireComponent = require.context (
  './', // 在当前目录下查找
  false, // 递归
  /\.md$/ // 正则匹配，以 md 结尾的文件
)

requireComponent.keys().forEach(fileName => {
  let comp = requireComponent(fileName)
  resultComps[fileName.replace(/^\.\/(.*)\.\w+$/, '$1')] = comp.default
})

export default resultComps