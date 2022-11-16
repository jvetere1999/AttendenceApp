import json

import qrcode

import datetime

import pygame


class QRData:
    def __init__(self, StartTime, DeviceID, EndTime):
        self.StartTime = StartTime
        self.DeviceID = DeviceID
        self.EndTime = EndTime


def to_json(obj):
    return json.dumps(obj, default=lambda obj: obj.__dict__)

def generateQRcode():
    StartTimeInt = datetime.datetime.now()
    TwentyInt = datetime.timedelta(seconds=20)
    EndTimeInt = (StartTimeInt + TwentyInt)
    start_time = str(StartTimeInt)
    end_time = str(EndTimeInt)

    QR1 = QRData(start_time, 0, end_time)

    QR = to_json(QR1)
    img = qrcode.make(QR)
    type(img)  # qrcode.image.pil.PilImage
    img.save("QRCode.png")


pygame.init()


gameDisplay = pygame.display.set_mode((0,0), pygame.FULLSCREEN)
pygame.display.set_caption('QR Display')

black = (0, 0, 0)
white = (255, 255, 255)

clock = pygame.time.Clock()
crashed = False 

generateQRcode()

TwentyInt = datetime.timedelta(seconds=20)
EndTimeInt = (datetime.datetime.now() + TwentyInt)


while not crashed:
    for event in pygame.event.get():
        if event.type == pygame.QUIT:
            crashed = True
        if event.type == pygame.KEYDOWN:
            if event.key == pygame.K_ESCAPE:
                crashed = True

    a = datetime.datetime.now()
    
    if EndTimeInt < a:
        generateQRcode()
        EndTimeInt = (a + TwentyInt)
    
    qrImg = pygame.image.load('QRCode.png')
    r = qrImg.get_rect()
    r.center = gameDisplay.get_rect().center
    gameDisplay.fill(white)
    gameDisplay.blit(qrImg, r)

    pygame.display.update()
    clock.tick(60)

pygame.quit()
quit()

