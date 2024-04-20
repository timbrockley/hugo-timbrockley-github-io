---
layout: post
title: "Japanese Input Method"
description: "The steps I followed to set up Japanese Input Method using Linux Mint Debian Edition (LMDE 4)."
date: 2021-08-18
image: "/images/linux/japanese-input-method/japanese_input_method_120x120.png"
categories: ["linux"]
tags: ["japanese-input-method", "japanese", "input-method", "hiragana", "katakana", "kanji", "fcitx", "mozc", "debian", "ubuntu", "linux-mint", "lmde"]
---
The steps I followed to set up Japanese Input Method using Linux Mint Debian Edition (LMDE 4).

### 1. Input Method Settings

Choose "Input method" from the application menu.

![menu-option](/images/linux/japanese-input-method/linux_cinnamon_menu_input_method.png)

### 2. Input Method Framework

Select "Fcitx" from the "Input method framework" drop-down menu.

![input-method-framework](/images/linux/japanese-input-method/linux_input_method_crop_select_fcitx_603x325.png)

### 3. Japanese Language Support Package

Select "Japanese" located on the left hand side menu.

![japanese-language](/images/linux/japanese-input-method/linux_input_method_crop_select_japanese_603x325.png)

Click the "Install" button located in the main panel.

![install](/images/linux/japanese-input-method/linux_input_method_crop_select_japanese_install_751x368.png)

Follow the prompts to install the package.

### 4. Reboot

Reboot the system.

### 5. Input Method Configuration

Right-Click on Fcitx keyboard icon in the application panel.

![Fcitx Keyboard Icon](/images/linux/japanese-input-method/linux_fxitx_keyboard_icon_right_click.png)

Select "Configure" from the menu.

![Fcitx Keyboard Icon Select Configure](/images/linux/japanese-input-method/linux_fcitx_keyboard_icon_select_configure.png)

Click the "+" button location at the bottom right of the window.

![Fcitx Keyboard Icon](/images/linux/japanese-input-method/linux_fcitx_input_method_configuration.png)

Untick the "Only Show Current Language" checkbox.

![Fcitx Keyboard Icon](/images/linux/japanese-input-method/linux_add_input_method_untick_only_show_current_language.png)

Type "mozc" in the input box at the bottom of the window.

![Fcitx Keyboard Icon](/images/linux/japanese-input-method/linux_add_input_method_type_mozc.png)

Select "mozc" from the list location in the main panel of the window.

![Fcitx Keyboard Icon](/images/linux/japanese-input-method/linux_add_input_method_select_mozc.png)

Click "OK"

![Fcitx Keyboard Icon](/images/linux/japanese-input-method/linux_add_input_method_click_ok.png)

## Usage

To change input methods first click inside any input box.

{{< rawhtml >}}
<span style="text-decoration:underline;">Fcitx Keyboard Icon</span>
{{< /rawhtml >}}

Switch between normal keyboard and Mozc keyboard by clikcing the Fcitx keyboard icon in the application panel.

![fcitx-icon](/images/linux/japanese-input-method/linux_fcitx_icon.png)
![mozc-icon](/images/linux/japanese-input-method/linux_mozc_icon.png)

While in Mozc mode right-click and select the desired input method (hiragana/katakana) from the Composistion Mode option in the menu.

![composition-mode](/images/linux/japanese-input-method/linux_mozc_menu_composition_mode.png)

## Keyboard Shortcuts

| Keyboard Shortcut | Description |
|:--|:--|
| ctrl + space | Convert to Hiragana |
| F6 | Convert to Hiragana |
| F7 | Convert to Katakana |
| F8 | Convert to Half Width Katakana |
| F9 | Convert to Latin Alphabet |
| F9 | Convert to Half Width Latin Alphabet |
