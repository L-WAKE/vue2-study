// 自定义插件

/*
    (1.编写一个类，实现 apply(compiler) 方法。
    (2.在 apply 方法中，使用 compiler.hooks 对象绑定一个或多个钩子函数。
    (3.钩子函数会在Webpack执行到相应的阶段时被调用，并被传入一个 compilation 对象和其它参数。
    (4.钩子函数处理compilation对象，可以修改、添加、删除生成的资源文件。
    (5.插件类导出，添加到Webpack配置文件中的plugins数组中。
*/
class RemoveConsolePlugin {
  apply(compiler) {
    compiler.hooks.emit.tap("RemoveConsolePlugin", (compilation) => {
      for (const fileName in compilation.assets) {
        if (/\.js$/.test(fileName)) {
          const source = compilation.assets[fileName].source();
          const newSource = source.replace(/(console\.log\()|debugger/g, "");
          compilation.assets[fileName] = {
            source: () => newSource,
            size: () => newSource.length,
          };
        }
      }
    });
  }
}
module.exports = RemoveConsolePlugin;
