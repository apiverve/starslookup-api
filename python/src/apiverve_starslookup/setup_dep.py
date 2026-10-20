from setuptools import setup, find_packages

setup(
    name='apiverve_starslookup',
    version='1.2.2',
    packages=find_packages(),
    include_package_data=True,
    install_requires=[
        'requests',
        'setuptools'
    ],
    description='Stars Lookup retrieves physical and positional stellar data by star name or astronomical classification. Query individual stars or filter by spectral class to obtain mass in kilograms, distance in light-years, and stellar type.',
    author='APIVerve',
    author_email='hello@apiverve.com',
    url='https://apiverve.com/marketplace/starslookup?utm_source=pypi&utm_medium=referral&utm_content=homepage',
    classifiers=[
        'Programming Language :: Python :: 3',
        'Operating System :: OS Independent',
    ],
    python_requires='>=3.6',
)
