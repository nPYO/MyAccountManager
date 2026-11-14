# マイアカウント管理 / My Account Manager

Windows向けのローカル型アカウント・パスワード管理アプリです。
アカウント情報を暗号化して保存し、検索、項目の整理、二段階認証コードの表示、バックアップ・復元を行えます。

## ダウンロード

**[最新版をダウンロード](https://github.com/nPYO/MyAccountManager/releases/latest)**

| 配布版 | 選び方 |
| --- | --- |
| **Standard** | 普段使うWindows PC向け。Microsoft Edge WebView2 Evergreen Runtimeが必要です。 |
| **Portable** | USBなどへの持ち運び向け。WebView2 Fixed Version Runtimeを同梱しています。 |

ZIPを展開し、書込み可能なフォルダーで `MyAccountManager.exe` を実行してください。
.NET Runtimeの個別インストールは不要です。ZIP内から直接実行しないでください。

## 動作環境

- Windows 10 / 11、x64
- アプリとデータを保存するフォルダーへの書込み権限
- Standard: Microsoft Edge WebView2 Evergreen Runtime
- Portable: WebView2 Fixed Version Runtime 154.0.4258.62を同梱
- 自己完結形式: .NET 10.0.15を同梱

アプリの保存・検索機能はローカルで動作します。クラウド同期機能はありません。
アプリからWebサイトを開く場合は、標準ブラウザーと接続先サイトが使用されます。

## 主な機能

- アカウント情報の登録・編集・検索
- アカウントごとの入力項目の追加・並べ替え
- TOTP確認コードの表示とQR画像の読取り
- 緊急コードとパスキー情報の台帳
- 暗号化バックアップ、復元キーによる移行
- HTML出力・印刷、日本語・英語表示

パスキー機能は登録情報の台帳です。認証器やパスキー秘密鍵を保存する機能ではありません。

## はじめに

1. 配布ZIPを展開して起動します。
2. 初回画面でユーザー名とパスワードを登録します。
3. アカウントを追加します。
4. 「設定・管理」から手動バックアップと復元キーを保存します。

**[使い方と更新手順](docs/USAGE.md)** · **[セキュリティ上の注意](SECURITY.md)**

## ダウンロードの確認

このリリースの実行ファイルはコード署名されていません。Windowsが警告を表示する場合があります。
入手元を確認し、Releaseにある `SHA256SUMS.txt` と照合してください。警告を無条件に無効化しないでください。

PowerShell:
```powershell
Get-FileHash .\MyAccountManager-0.1.0-Standard-win-x64.zip -Algorithm SHA256
```

チェックサムは破損・差異の確認用です。コード署名や第三者によるセキュリティ監査の代わりにはなりません。

## ライセンス

独自成果物は **[0BSD](LICENSE)**、Copyright © 2026 nPYO。
同梱する第三者ソフトウェアには各提供者の条件が適用されます。
各配布ZIPの `licenses/` と、アプリの「ライセンス・通知」を参照してください。
Portableに同梱するMicrosoft WebView2 RuntimeはMicrosoftのライセンス条件に従います。

このリポジトリは一般向けの配布ページです。開発用の履歴、内部資料、利用者データは含みません。