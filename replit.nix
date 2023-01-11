{ pkgs }: {
  deps = [
    pkgs.yarn add moment             # Yarn
    pkgs.Install-Package Moment.js   # NuGet
    pkgs.yarn add moment             # Yarn
    pkgs.yarn add moment             # YarnInstall-Package Moment.js   # NuGetspm install moment --save   # spmmeteor add momentjs:moment  # meteorbower install moment --save # bower (deprecated)npm install moment --save   # npm
    pkgs.nodePackages.vscode-langservers-extracted
    pkgs.nodePackages.typescript-language-server
  ];
}
