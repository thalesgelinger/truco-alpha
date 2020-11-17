from python_framework import Service, ServiceMethod
import CardMock

@Service()
class CardService:

    @ServiceMethod()
    def getCards(self) :
        return CardMock.WINNER_HAND;
