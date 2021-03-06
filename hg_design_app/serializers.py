from rest_framework import serializers
from .models import Item, OrderItem, Order

class ItemSerializer(serializers.ModelSerializer):
    class Meta:
        model = Item
        fields =('id', 'title', 'price')

class OrderItemSerializer(serializers.ModelSerializer):
    item = ItemSerializer()
    class Meta:
        model = OrderItem
        fields = ('id', 'item',)

# class OrderSerializer(serializers.ModelSerializer):
    
