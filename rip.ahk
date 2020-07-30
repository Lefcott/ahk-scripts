^!Numpad1::
^!1::
  ClipSaved := ClipboardAll   ; saving current clipboard
  Clipboard := "" ; emptying clipboard
  n++
  FileRead, clipboard, getAccounts.js ; putting contents of .txt file in clipboard
  ClipWait ; waiting for the clipboard to be ready - this may be unnecessary, or may be illogically placed
  Send ^v {Enter} ; paste
  Clipboard := ClipSaved   ; putting original ciplboard contents back
  Return

^!,::ExitApp
