from rest_framework.decorators import api_view
from rest_framework.response import Response
from rest_framework import status
from django.contrib.auth.models import User
from rest_framework.authtoken.models import Token


@api_view(['POST'])
def signup(request):
    username = request.data.get('username')
    email = request.data.get('email')
    password = request.data.get('password')
    first_name = request.data.get('first_name', '')
    last_name = request.data.get('last_name', '')

    print("=== SIGNUP ATTEMPT ===")
    print(f"Username: {username}, Email: {email}")

    if not username or not email or not password:
        return Response({'error': 'All fields are required'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(email=email).exists():
        return Response({'error': 'Email already registered'}, status=status.HTTP_400_BAD_REQUEST)

    if User.objects.filter(username=username).exists():
        return Response({'error': 'Username already taken'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.create_user(
            username=username,
            email=email,
            password=password,
            first_name=first_name,
            last_name=last_name
        )

        token = Token.objects.create(user=user)

        print(f"✅ User created: {user.username}")
        print(f"✅ Token created: {token.key}")

        return Response({
            'token': token.key,
            'username': user.username,
            'user_id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        }, status=status.HTTP_201_CREATED)

    except Exception as e:
        print(f"❌ Signup error: {str(e)}")
        return Response({'error': 'Signup failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)


@api_view(['POST'])
def login(request):
    email = request.data.get('email')
    password = request.data.get('password')

    print(f"=== LOGIN ATTEMPT ===")
    print(f"Email: {email}")

    if not email or not password:
        return Response({'error': 'Email and password are required'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        user = User.objects.get(email=email)
        print(f"✅ User found: {user.username}")
    except User.DoesNotExist:
        print("❌ User not found")
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

    if not user.check_password(password):
        print("❌ Invalid password")
        return Response({'error': 'Invalid email or password'}, status=status.HTTP_400_BAD_REQUEST)

    try:
        Token.objects.filter(user=user).delete()
        token = Token.objects.create(user=user)

        print(f"✅ Token created: {token.key}")

        return Response({
            'token': token.key,
            'username': user.username,
            'user_id': user.id,
            'email': user.email,
            'first_name': user.first_name,
            'last_name': user.last_name
        })
    except Exception as e:
        print(f"❌ Token error: {str(e)}")
        return Response({'error': 'Login failed'}, status=status.HTTP_500_INTERNAL_SERVER_ERROR)
