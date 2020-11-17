from python_framework import Controller, ControllerMethod, HttpStatus
from Role import *
import UserDto

@Controller(url = '/cards', tag='Card', description='Card controller')
class CardController:

    @ControllerMethod(
        roleRequired=[USER, ADMIN])
    def get(self):
        return self.service.card.getCard(), HttpStatus.OK
