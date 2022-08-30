from api.viewsets import ExpenseViewset
from rest_framework import routers

router = routers.DefaultRouter()
router.register('expense',ExpenseViewset)