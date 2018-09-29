from setuptools import setup

setup(
    name='denpa',
    packages=['denpa'],
    include_package_data=True,
    install_requires=[
        'flask',
        'transmissionrpc'
    ],
)
