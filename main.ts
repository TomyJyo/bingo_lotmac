// 抽選準備完了
input.onButtonPressed(Button.A, function () {
    customEditor.addMemo("BINGO の数字(1～75)とグループの２つの配列を作成")
    customEditor.addMemo("ｸﾞﾙｰﾌは、B:1-15,I:16-30,N:31-45,G:46-60,O:61-75")
    int_DatNum = 0
    ary_BinNum = []
    ary_BinGro = []
    while (int_DatNum < 75) {
        ary_BinNum.push(int_DatNum + 1)
        if (int_DatNum < 15) {
            ary_BinGro.push("B")
        } else if (int_DatNum < 30) {
            ary_BinGro.push("I")
        } else if (int_DatNum < 45) {
            ary_BinGro.push("N")
        } else if (int_DatNum < 60) {
            ary_BinGro.push("G")
        } else {
            ary_BinGro.push("O")
        }
        int_DatNum += 1
    }
    BGM("A")
    customEditor.addMemo("配列に格納したﾃﾞｰﾀ数を2桁表示")
    whaleysans.showNumber(ary_BinNum.length)
    basic.pause(2000)
    basic.showIcon(IconNames.Happy)
})
function BGM (strBtn: string) {
    music.setVolume(255)
    if (strBtn == "A") {
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(784, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
    } else if (strBtn == "B") {
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(392, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(349, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Half)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Eighth)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Eighth))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(466, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(440, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(523, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    } else if (strBtn == "Z") {
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Quarter)), music.PlaybackMode.UntilDone)
        music.rest(music.beat(BeatFraction.Quarter))
        music.play(music.tonePlayable(131, music.beat(BeatFraction.Double)), music.PlaybackMode.UntilDone)
    }
}
// 抽選できる数字はない。
input.onButtonPressed(Button.B, function () {
    if (ary_BinNum.length > 0) {
        customEditor.addMemo("「グループ＋数字」の配列からランダムに抽選して表示")
        BGM("B")
        int_DatNum = randint(0, ary_BinNum.length - 1)
        int_DspNum = ary_BinNum.removeAt(int_DatNum)
        str_DspGro = ary_BinGro.removeAt(int_DatNum)
        for (let index = 0; index < 2; index++) {
            basic.showString("" + (str_DspGro))
            basic.pause(1000)
            customEditor.addMemo("抽選した数字を2桁表示")
            whaleysans.showNumber(int_DspNum)
            basic.pause(1000)
        }
    } else {
        customEditor.addMemo("「グループ＋数字」配列の中が空の時")
        customEditor.addMemo("(例) Ａボタンを押さずにいきなりＢボタンを押した")
        BGM("Z")
        basic.showIcon(IconNames.No)
    }
})
let str_DspGro = ""
let int_DspNum = 0
let ary_BinGro: string[] = []
let ary_BinNum: number[] = []
let int_DatNum = 0
basic.showLeds(`
    # # # # #
    # . . # #
    # . # . #
    # # . . #
    # # # # #
    `)
