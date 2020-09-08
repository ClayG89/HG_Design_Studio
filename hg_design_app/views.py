from django.shortcuts import render
from rest_framework import viewsets
from .serializers import ItemSerializer, OrderItemSerializer, OrderSerializer
from .models import Item, OrderItem, Order

class ItemView(viewsets.ModelViewSet):
    queryset = Item.objects.all()
    serializer_class = ItemSerializer

class OrderItemView(viewsets.ModelViewSet):
    queryset = OrderItem.objects.all()
    serializer_class = OrderItemSerializer

class OrderView(viewsets.ModelViewSet):
    queryset = Order.objects.all()
    serializer_class = OrderSerializer


