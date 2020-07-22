from django.contrib.auth.models import User
from rest_framework import serializers

class UserSerializer(serializers.ModelSerializer):
    id = serializers.IntegerField(read_only=True)
    password = serializers.CharField(write_only=True, required=False)

    class Meta:
        model = User
        fields = ('id', 'username', 'first_name', 'last_name', 'email', 'password', 'is_superuser')

    def create(self, validated_data):
        if not self.context.get('request').user.is_superuser:
            raise serializers.ValidationError("No tienes permisos para realizar esta acción")
        email = validated_data.get('username')
        user, created = User.objects.get_or_create(
                username=email,
                email=email,
                first_name=validated_data['first_name'],
                last_name=validated_data['last_name'],
            )
        user.set_password(validated_data['password'])
        user.save()

        return user
