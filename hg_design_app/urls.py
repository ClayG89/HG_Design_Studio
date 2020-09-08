from django.urls import path, include
from rest_framework import routers
from . import views

router = routers.DefaultRouter()
router.register('items', views.ItemView)
router.register('orderitems', views.OrderItemView)
router.register('orders', views.OrderView)

urlpatterns = [
    path('', include(router.urls)),
]