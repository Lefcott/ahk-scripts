SendFile(path) {
  ClipSaved := ClipboardAll   ; saving current clipboard
  Clipboard := "" ; emptying clipboard
  n++
  FileRead, clipboard, %path% ; putting contents of .txt file in clipboard
  ClipWait ; waiting for the clipboard to be ready - this may be unnecessary, or may be illogically placed
  Send ^v ; paste
  Clipboard := ClipSaved   ; putting original ciplboard contents back
}

MButton::
  Sleep, 500
  Send {a}{c}{c}{o}{u}{n}{t}{s}{=}
  Sleep, 1000
  SendFile("getAccounts.js")
  Sleep, 10
  Send {Enter}
  Return

^!Numpad2::
^!2::
  Sleep, 500
  Send ^a {BackSpace}
  Sleep, 10
  SendFile("find_euw.js")
  Send ^{Enter}
  Return

^!,::ExitApp
